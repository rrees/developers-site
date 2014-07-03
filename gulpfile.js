var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');

var ejs = require('ejs');
var fs = require('fs');
var path = require('path');
var assign = require('lodash-node/modern/objects/assign');
var find = require('lodash-node/modern/collections/find');

var basePath = __dirname + '/src';

gulp.task('sass', function () {
    gulp.src('./src/css/main.scss')
        .pipe(sass({
            // FIXME:
            // https://github.com/sindresorhus/gulp-ruby-sass/pull/68
            // sourcemap: true
        }))
        .pipe(gulp.dest('./target/css'));
});

gulp.task('copy', function () {
    gulp.src('./src/images/**')
        .pipe(gulp.dest('./target/images'));
    // TODO: jspm bundle
    // https://github.com/jspm/jspm-cli/issues/43
    // TODO: Concatenate with polyfills
    gulp.src('./src/jspm_packages/**')
        .pipe(gulp.dest('./target/jspm_packages'));
    // SystemJS config
    gulp.src('./src/config.js')
        .pipe(gulp.dest('./target'));
    gulp.src('./src/js/**/*.js')
        .pipe(gulp.dest('./target/js'));
    gulp.src('./src/enhanced-views/**/*.ejs')
        .pipe(gulp.dest('./target/enhanced-views'));
});


gulp.task('generate', function () {
    generatePages();
});

gulp.task('watch', function () {
    var server = livereload();
    gulp.watch('./src/css/**/*.scss', ['sass']);
    gulp.watch('./src/**/*.ejs', ['generate']);
    gulp.watch('./src/js/**/*.js', ['copy']);
    gulp.watch('./src/images/**', ['copy']);
    gulp.watch('./src/enhanced-views/**/*.ejs', ['copy']);

    gulp.watch('./target/**').on('change', function (file) {
        server.changed(file.path);
    });
});

gulp.task('default', ['sass', 'copy', 'generate']);

var talks = [
    {
        title: 'CSS and the Critical Path',
        authorName: 'Patrick Hamann',
        location: 'Over the Air',
        date: '2013-09-27',
        imageFileBasename: '2013-09-27-css-and-the-critical-path.jpg',
        link: 'https://speakerdeck.com/patrickhamann/css-and-the-critical-path',
        type: 'slides'
    },
    {
        title: 'Why APIs are Essential in Web Development',
        authorName: 'Jenny Sivapalan',
        location: 'Kings Place, London',
        date: '2013-09-11',
        imageFileBasename: '2013-09-11-why-apis-are-essential-in-web-development.jpg',
        link: 'https://www.youtube.com/watch?v=JFG9I1tKNDk',
        type: 'video'
    },
    {
        title: 'Democratising Attention Data at guardian.co.uk',
        authorName: 'Graham Tackley',
        location: 'Aarhus International Software Development Conference',
        date: '2013-10-01',
        imageFileBasename: '2013-10-01-democratising-attention-data-at-guardian-co-uk.jpg',
        link: 'http://gotocon.com/dl/goto-aar-2013/slides/GrahamTackley_DemocratisingAttentionDataAtGuardianCoUk.pdf',
        type: 'slides'
    },
    {
        title: 'Responsive Design at the Guardian',
        authorName: 'Matt Andrews',
        location: 'IET Austin Court, Birmingham',
        date: '2013-10-10',
        imageFileBasename: '2013-10-10-responsive-design-at-the-guardian.png',
        link: 'http://mattandrews.info/talks/canvasconf-2013/',
        type: 'article'
    }
];

// TODO: Generate Guardian email address from name
var authors = [
    {
        name: 'Patrick Hamann',
        link: 'https://twitter.com/patrickhamann',
        emailAddress: 'patrick.hamann@guardian.co.uk'
    },
    {
        name: 'Jenny Sivapalan',
        link: 'https://twitter.com/jenny_sivapalan',
        emailAddress: 'jenny.sivapalan@guardian.co.uk'
    },
    {
        name: 'Graham Tackley',
        link: 'https://twitter.com/tackers',
        emailAddress: 'graham.tackley@guardian.co.uk'
    },
    {
        name: 'Matt Andrews',
        link: 'https://twitter.com/mattpointblank',
        emailAddress: 'matt.andrews@guardian.co.uk'
    }
];

var jobs = [
    {
        title: 'Senior Software Developer',
        description: '<p>Senior developers need to provide leadership, support and guidance to junior developers in their team while supporting and working effectively to deliver the technical vision of the lead developer. They show initiative, curiosity, and think in terms of potential solutions, not problems. They help others to develop their own ideas and solutions and are humble in their expertise.</p>'
    },
    {
        title: 'Software Developer',
        description: '<p>We are seeking excellent and passionate Software Developers to work on projects across the business including the core, largely Java, guardian.co.uk website, which serves up to 1200 pages per second with close to 100% uptime and the Scala based Open Platform which makes our content available to many other partners and applications. We have many projects in progress simultaneously and currently we are using many innovative technologies such as Scala, MongoDB, Lift, Python, Amazon Web Services and Google AppEngine.</p>'
    },
    {
        title: 'Client-side Developer',
        description: '<p>You’ll be an expert with CSS3 and modern JavaScript, comfortable writing OOCSS and using technologies such as AMD and CommonJS, and thinking and working in a responsive, progressively-enhanced manner. We’re looking for creative Client-side Developers with good knowledge of scalability and performance. Knowledge of HTML5 and CSS3 is a must, and an eye for design and/or UX would be a bonus. Knowledge and experience of automated or multi-platform testing is desirable, too.</p>'
    }
];

var pages = [
    {
        title: 'Home',
        fileBasename: 'index.ejs'
    },
    {
        title: 'Open Platform',
        fileBasename: 'open-platform.ejs'
    },
    {
        title: 'Open Source',
        fileBasename: 'open-source.ejs'
    },
    {
        title: 'Events & Talks',
        fileBasename: 'events-&-talks.ejs',
        // Dates should be in ISO 8601
        // Recognised types: slides, video, article
        talks: talks
    },
    {
        title: 'Join the Team',
        fileBasename: 'join-the-team.ejs',
        jobs: jobs
    }
];

function createMd5Hash(emailAddress) {
    var crypto = require('crypto');
    return crypto.createHash('md5').update(emailAddress).digest('hex');
}

function generatePages() {
    pages.forEach(function (page) {
        var rootScope = {
            pages: pages,
            findAuthorByName: function (authorName) {
                return find(authors, { name: authorName });
            },
            momentFilter: function (dateString, formatString) {
                var moment = require('moment');
                return moment(dateString).format(formatString);
            },
            getGravatarUrl: function (emailAddress) {
                return 'http://www.gravatar.com/avatar/' + createMd5Hash(emailAddress);
            }
        };
        var pageScope = Object.create(rootScope);
        assign(pageScope, page);
        var filename = path.join(basePath, page.fileBasename);
        var file = fs.readFileSync(filename, { encoding: 'utf8' });
        var output = ejs.render(file, {
            // Needed by EJS
            filename: filename,
            scope: pageScope
        });

        fs.writeFileSync('./target/' + page.fileBasename.replace(/\.ejs$/, '.html'),
            output, { encoding: 'utf8' });
    });
}

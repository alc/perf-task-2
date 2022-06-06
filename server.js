const express = require('express');
const app = express();
const port = process.env.NODE_PORT || 3000;
const {TwingEnvironment, TwingLoaderFilesystem} = require('twing');

const loader = new TwingLoaderFilesystem('./templates');
const twigContext = {
    app: {
        user: {
            profilePicture: 'https://placekitten.com/g/128/128',
            firstName: 'Hubertus',
            lastName: 'Bigend',
            emailAddress: 'hubertus.bigend@fake-email.net'
        }
    },
    menu: [
        {
            name: 'My LEARN',
            href: '/',
            active: true,
            icon: 'my-learn'
        },
        {
            name: 'Search',
            href: '/search',
            active: false,
            icon: 'search-page'
        },
        {
            name: 'Site Traffic',
            href: '/traffic-report',
            active: false,
            icon: 'report'
        },
        {
            name: 'Policies',
            href: '/policies',
            active: false,
            icon: 'policies'
        },
        {
            name: 'Support',
            href: '/support',
            active: false,
            icon: 'support'
        },
        {
            name: 'K20 Center',
            href: '/organization/k20-center',
            active: false,
            icon: 'organization'
        }
    ]
};

app.use(function errorHandler(err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        res.status(500);
        res.render('error', {error: err});

        next();
    }
);

app.use(express.static('public'));

app.get('/', function (req, res, next) {
    const twing = new TwingEnvironment(loader, {
        debug: true,
        cache: false,
        strict_variables: true
    });

    twing.render('index.html.twig', twigContext)
        .then((output) => {
            res.end(output);
        })
        .catch(err => next(err));
});

app.listen(port, () => {
    console.log('Node.js Express server listening on port ' + port);
});

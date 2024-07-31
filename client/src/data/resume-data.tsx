import { GitHubIcon, LinkedInIcon } from '@/components/icons'

export const RESUME_DATA = {
    name: 'Arthur Peruzzo ',
    initials: 'AP',
    location: 'Pelotas, Brazil, GMT-3',
    locationLink: 'https://www.google.com/maps/place/Pelotas',
    about: 'Detail-oriented Full Stack Engineer and GIS Analyst dedicated to building high-quality products.',
    summary:
        "As a Full Stack Engineer and GIS Analyst, I'm specializing in taking products from concept to launch, and applying my engineering skills seeking best practices and quality. I'm a fast learner and hard worker, dedicated to improve my abilities and looking forward to collaborate with projects. Currently, I work mostly with TypeScript, React, Nest.js, and PostgreSQL. I have over 6 years of experience working with GIS projects, collecting, processing and analyzing data for mapping and environmental modelling processes.",
    avatarUrl: 'https://avatars.githubusercontent.com/u/73316481?v=4',
    personalWebsiteUrl: 'https://ozzurep.up.railway.app/',
    contact: {
        email: 'peruzzoarthur@gmail.com',
        tel: '+5553981430660',
        social: [
            {
                name: 'GitHub',
                url: 'https://github.com/peruzzoarthur',
                icon: GitHubIcon,
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/arthur-peruzzo/',
                icon: LinkedInIcon,
            },
        ],
    },
    education: [
        {
            school: 'Universidade Federal de Pelotas',
            degree: "Bachelor's Degree in Environmental Engineering",
            start: '2011',
            end: '2018',
        },
        {
            school: 'Universidade Federal de Pelotas',
            degree: "Master's Degree in Environmental Sciences",
            start: '2020',
            end: '2022',
        },
        {
            school: 'Universidade de São Paulo',
            degree: "Master's of Business Administration in Software Engineering",
            start: '2024',
            end: null,
        },
    ],
    work: [
        {
            company: 'RESAM - Engenharia e Sustentabilidade',
            title: 'Environmental Engineer and GIS Analyst',
            start: '2018',
            end: '2020',
            link: '',
            badges: ['Remote'],
            description:
                'Developing projects related to environmental licences. Worked mostly with GIS technologies for creating maps for stakeholders and environmental entities',
        },
        {
            company: 'Sperzo',
            title: 'Full stack developer and GIS Analyst',
            start: '2022',
            end: null,
            badges: ['Remote'],
            link: '',
            // logo: ParabolLogo,
            description:
                "My own company. Two years ago I decided to start my journey in web development and connect with my data analysis knowledge. In this moment I'm working on building products zero to one products and searching for projects in which I can contribute with.",
        },
    ],
    skills: [
        'JavaScript',
        'TypeScript',
        'React.js',
        'Nest.js',
        'PostgreSQL',
        'QGIS',
        'ArcGIS',
        'Python',
    ],
    projects: [
        {
            title: 'Gym manager',
            techStack: [
                'Side Project',
                'TypeScript',
                'React',
                'Nest.js',
                'PostgreSQL',
            ],
            description:
                "A simple full stack gym manager I'm building for personal usage and possible future product",
            link: {
                label: 'gym-manager',
                href: 'https://coldgym.up.railway.app/',
            },
        },
        {
            title: 'Cold Cup Generator',
            techStack: [
                'Side Project',
                'TypeScript',
                'React',
                'Nest.js',
                'PostgreSQL',
            ],
            description:
                'A full stack application to manage and create tennis and padel tournaments',
            link: {
                label: 'cold-cup-generator',
                href: 'https://coldcupgenerator.up.railway.app/',
            },
        },
        {
            title: 'Peruzzo.me',
            techStack: ['Side Project', 'React.js'],
            description:
                'Personal website and blog. Building with React.js and Acerternity.ui components',
            // logo: JarockiMeLogo,
            link: {
                label: 'ozzurep',
                href: 'https://ozzurep.up.railway.app/',
            },
        },
        {
            title: 'GIS Web Software',
            techStack: [
                'Side Project',
                'React.js',
                'Nest.js',
                'PostgreSQL',
                'PostGIS',
                'GIS',
                'Leaflet',
            ],
            description:
                'Recently I started working with Leaflet for building geodata web platform. The ideia is to build a software that uses in the first moment PostGIS extension for working with this data, showing and also manipulating the data.',
            // logo: JarockiMeLogo,
            link: {
                label: 'MyGISApp',
                href: 'https://gis.up.railway.app/gis',
            },
        },
    ],
} as const

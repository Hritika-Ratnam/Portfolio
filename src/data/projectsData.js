
// import one from '../assets/svg/projects/one.svg'
// import two from '../assets/svg/projects/two.svg'
// import three from '../assets/svg/projects/three.svg'
// import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'

import one from '../assets/svg/projects/one.png'
import two from '../assets/svg/projects/two.png'
import three from '../assets/svg/projects/three.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Blog App',
        projectDesc: 'A MERN stack blog application with JWT and bcryptjs-based user authentication, secure environment management, and real-time updates.',
        tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        code: 'https://github.com/Hritika-Ratnam/Mern_Blog',
        demo: 'https://mern-blog-daay.onrender.com/',
        image: one
    },
    {
        id: 2,
        projectName: 'URL Shortener',
        projectDesc: 'A URL shortening service with a user-friendly interface, using Node.js, Express.js, and MySQL database for link management and redirection.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
        code: 'https://github.com/Hritika-Ratnam/Short_URL',
        demo: 'https://url-shortener-client-eight.vercel.app/',
        image: two
    },
    {
        id: 3,
        projectName: 'Breast Cancer Detection(Hybrid CNN and ViT) ',
        projectDesc: 'Developed a hybrid model using CNNs (Inception-V3, ResNet-50) and Vision Transformers for IDC detection, trained on a large dataset for high accuracy.',
        tags: ['Python', 'ResNet50', 'InceptionV3', 'Vision Transformers'],
        //code: 'https://github.com/Hritika-Ratnam/Breast_Cancer_Detection',
        //demo: '',
        image: three
    },
    {
        id: 4,
        projectName: 'Weather App',
        projectDesc: 'Weather forecast system that predicts weather conditions based on multiple parameters, providing accurate real-time weather information.',
        tags: ['Django', 'CSS', 'Material UI'],
        code: 'https://github.com/Hritika-Ratnam/Weather-app',
        //demo: '',
        image: five
    },
    {
        id: 5,
        projectName: 'Random Meme Generator',
        projectDesc: 'A fun project that fetches random memes from an API and displays them to the user, built with React.js.',
        tags: ['React.js', 'API'],
        code: 'https://github.com/Hritika-Ratnam/Random-MEME-Generator',
        //demo: '',
        image: five
    },
    {
        id: 6,
        projectName: 'Book Management',
        projectDesc: 'A simple web application to manage a collection of books, allowing users to add, update, and remove books from a list. Built with React.js and Node.js.',
        tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        code: 'https://github.com/Hritika-Ratnam/book-management',
        //demo: '',
        image: six
    }
]

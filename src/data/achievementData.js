
import one from '../assets/achievements/ooc.png'
import two from '../assets/achievements/shehack.png'
import three from '../assets/achievements/tesla.png'


export const achievementData = {
    bio: "I focus on developing skills and solving real-world problems rather than just accumulating certifications. My achievements reflect my commitment to continuous learning, growth, and contribution in both technical and leadership roles.",
    achievements: [
        {
            id: 1,
            title: 'IoT Wing Coordinator at TESLA Society',
            details: 'Led IoT workshops and events for students, providing hands-on experience and fostering innovation through TESLA, IIIT Allahabad.',
            date: '2023 - 2024',
            field: 'Leadership & IoT',
            image: three
        },
        {
            id: 2,
            title: 'SheHacks’22 - 4th Rank',
            details: 'Achieved 4th rank in SheHacks’22, a hackathon that empowers women and femme non-binary individuals in tech at IIIT Allahabad.',
            date: 'Apr 2022',
            field: 'Women in Tech',
            image: two
        },
        {
            id: 3,
            title: 'OOC 2022 - 3rd Rank',
            details: 'Secured 3rd rank in OOC 2022, a design hackathon blending creativity with practical solutions at IIIT Allahabad.',
            date: 'May 2023',
            field: 'Design Hackathon',
            image: one
        }
    ]
}

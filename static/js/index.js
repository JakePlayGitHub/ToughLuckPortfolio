
document.addEventListener('DOMContentLoaded', () => {

    const AboutMeBTN = document.getElementById('about-me-btn');
    const ProjectsBTN = document.getElementById('projects-btn');

    AboutMeBTN.addEventListener('click', () => {

        const AboutMeSection = document.getElementById('section-about_me');

        AboutMeSection.scrollIntoView({ behavior: 'smooth' });
    })

    ProjectsBTN.addEventListener('click', () => {

        const ProjectSection = document.getElementById('section-projects');

        ProjectSection.scrollIntoView({ behavior: 'smooth' });

    })
})
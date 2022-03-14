import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Whats Out There?',
			description:
				'UFO Sightings Database.',
			image: 'whatsoutthere.png',
			technologies: [
				'Node.js',
				'Express',
                'MySQL & Sequelize',
				'Handlebars',
				'Bulma',
			],
			github: 'https://github.com/',
			deployed: 'herokuapp.com/',
		},
		{
			name: 'What 2 Watch',
			description:
				'Movie Database.',
			image: 'whattowatch.png',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com',
			deployed: 'https://github.com',
		},
		{
			name: 'Run Buddy',
			description:
				'Run Buddy',
			image: 'runbuddy.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/',
			deployed: 'https://github.com',
		},
		{
			name: 'Password Generator',
			description:
				'Password Generator',
			image: 'passwordgenerator.png',
			technologies: [
				'JavaScript',
			],
			github: 'https://github.com/',
			deployed: 'https://github.com',
		},
		{
			name: 'Code Quiz',
			description:
				'Code Quiz',
			image: 'codequiz.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/',
			deployed: 'https://github.com',
		},
		{
			name: 'Workday Scheduler',
			description:
				'Workday Scheduler',
			image: 'workdayscheduler.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/',
			deployed: 'https://github.com',
		},
		{
			name: 'Weather Dashboard',
			description:
				'Weather Dashboard',
			image: 'weatherdashboard.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/',
			deployed: 'https://github.com',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">Brian Done Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
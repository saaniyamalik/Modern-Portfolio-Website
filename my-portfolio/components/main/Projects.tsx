import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectCard
                    src='/figmahackathon.png'
                    title='Figma'
                    description='Figma Hackathon using Next.js 15, Tailwind CSS,'
                />
                <ProjectCard
                    src='/resume-builder.png'
                    title='Resume-Builder'
                    description='Static Resume Using Next.js 15, Html, Css'
                />
                <ProjectCard
                    src='/uiux-hackathon.png'
                    title='Ui-Ux Design'
                    description='Ui-Ux Design  Using Next.js 15, Tailwind CSS, TypeScript'
                />
            </div>
        </div>
    )
}

export default Projects
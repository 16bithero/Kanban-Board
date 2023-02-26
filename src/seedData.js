import { v4 as uuidv4 } from 'uuid'

const seedData = [
    {
        id: uuidv4(),
        title: 'Pending',
        tasks: [
            {
                id: uuidv4(),
                title: 'Practice data structures and algorithms'
            },
            {
                id: uuidv4(),
                title: 'Build a project with Vue.js'
            },
            {
                id: uuidv4(),
                title: 'Build a RESTful API with Node.js'
            },
            {
                id: uuidv4(),
                title: 'Learn GraphQL'
            },
            {
                id: uuidv4(),
                title: 'Implement a responsive design for a website'
            },
            {
                id: uuidv4(),
                title: 'Learn a new language for 30 minutes daily'
            },
            {
                id: uuidv4(),
                title: 'Read a book on software design patterns'
            },
            {
                id: uuidv4(),
                title: 'Set up a CI/CD pipeline for a project'
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'Work in Progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Practice test-driven development'
            },
            {
                id: uuidv4(),
                title: 'Practice coding challenges on LeetCode'
            },
            {
                id: uuidv4(),
                title: 'Create a mobile app with React Native'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Build a serverless application with AWS Lambda'
            },
            {
                id: uuidv4(),
                title: 'Create a Kanban Board with ReactJS'
            }
        ]
    }
]

export default seedData
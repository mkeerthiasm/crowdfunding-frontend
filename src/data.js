export const allProjects = [    
    {
        id: 1,
        title: 'Project 1',
        description: 'This is project 1',
        goal:100,
        image: 'https://via.placeholder.com/150.jpg',
        is_open:false,
        date_created:'2020-01-01',
        owner:1,
        },

        {
        id: 2,
        title: 'Project 2',
        description: 'This is project 2',
        goal:200,
        image: 'https://via.placeholder.com/300.jpg',
        is_open:false,
        date_created:'2020-01-01',
        owner:1,
        },
        
        {
        id: 3,
        title: 'Project 3',
        description: 'This is project 3',
        goal:300,
        image: 'https://via.placeholder.com/300.jpg',
        is_open:false,
        date_created:'2020-01-01',
        owner:2,
        },

        {
        id: 4,
        title: 'Project 4',
        description: 'This is project 4',
        goal:400,
        image: 'https://via.placeholder.com/300.jpg',
        is_open:false,
        date_created:'2020-01-01',
        owner:2,
        },

        {
        id: 5,
        title: 'Project 5',
        description: 'This is project 5',
        goal:500,
        image: 'https://via.placeholder.com/300.jpg',
        is_open:false,
        date_created:'2020-01-01',
        owner:3,
        },

        
    ];

    export const oneProject = {
        id: 1,
        title: 'Project 1',
        description: 'This is project 1',
        goal:100,
        image: 'https://via.placeholder.com/150.jpg',
        is_open:false,
        date_created:'2020-01-01',
        owner:1,
        pledges: [
            {
                id: 1,
                amount: 100,
                comment: "This is a comment",
                anonymous: false,
                supporter: 1,
                project_id: 1,
            },
            {
                id: 2,
                amount: 200,
                comment: "That's a great cause",
                anonymous: true,
                supporter: 2,
                project_id: 1,
            },
            {
                id: 3,
                amount: 300,
                comment: "I'm happy to support this",
                anonymous: false,
                supporter: 3,
                project_id: 1,
            },
        ],
    };


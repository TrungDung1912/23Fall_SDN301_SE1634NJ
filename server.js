const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello world!' })
})

app.get('/products', (req, res) => {
    try {
        const data = [
            {
                id: 1,
                name: 'John',
                age: 34
            },
            {
                id: 2,
                name: 'Dung',
                age: 22
            },
            {
                id: 3,
                name: 'Huy',
                age: 50
            },
        ]
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

app.get('/blocks', (req, res) => {
    res.send({ message: 'Nice' })
})

app.listen(8888, () => {
    console.log('Server is running on port 8888')
});




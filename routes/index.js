const express = require('express');
const router = express.Router();

const { createProxyMiddleware } = require('http-proxy-middleware');
router.use('/api', createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

router.use('/ums', createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))


router.get('/', (req, res) => {
    res.render('index', { message: "Hello bruh"})
    })

router.use((req,res) =>{
res.status(404);
res.send("Page Doesn't exist");
res.render("error", {layout: "errorLayout.hbs", errormessage: `you lost ur way "${req.url}" doesn't exist`})
})


module.exports = router;
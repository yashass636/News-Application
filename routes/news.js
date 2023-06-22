const express = require('express')
const axios = require('axios')
const newsr=express.Router()

newsr.get('/',async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?sortBy=popularit&' +
          'country=in&' +
          'apiKey=87710a0e329a459aa29108e1d49107ff';

        const news_get =await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Home"})
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.post('/search',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=popularit&q=${search}&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        console.log(news_get)
        res.render('newss',{articles:news_get.data.articles,titles:search})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})


newsr.get('/politics',async(req,res)=>{
    const search=req.body.search
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=publishedAt&q=politics&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Politics"})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.get('/technology',async(req,res)=>{
    const search=req.body.search
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=publishedAt&q=technology&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Technology"})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.get('/business',async(req,res)=>{
    const search=req.body.search
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=publishedAt&q=business&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Business"})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.get('/sports',async(req,res)=>{
    const search=req.body.search
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=popularit&q=sports&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Sports"})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.get('/cricket',async(req,res)=>{
    const search=req.body.search
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=popularit&q=cricket&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Cricket"})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})


newsr.get('/football',async(req,res)=>{
    const search=req.body.search
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=popularit&q=football&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Football"})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})

newsr.get('/basketball',async(req,res)=>{
    const search=req.body.search
    // console.log(search);
    try {
        var url = `http://newsapi.org/v2/everything?sortBy=popularit&q=basketball&apiKey=87710a0e329a459aa29108e1d49107ff`

        const news_get = await axios.get(url)
        res.render('newss',{articles:news_get.data.articles,titles:"Basketball"})
        
        
    } catch (error) {
        if(error.response){
            console.log(error)
        }
        
    }
})






module.exports=newsr
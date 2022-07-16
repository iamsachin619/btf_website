import Cookies from 'js-cookie'
import {Api} from './index'

export const ContactUS = async(body) =>{
    const result = await Api.post('/api/contact-us',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Contact Result ",result)
    return result 
}

export const Subscribe = async(body) =>{
    const result = await Api.post('/api/subscribe',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Email Result ",result)
    return result 
}

export const GetClientsReview = async() =>{
    // Api.defaults.headers['Authorization'] = `Bearer  ${Cookies.get('access')}`
    const result = await Api.get(`/api/client-review`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Reviews result ",result)
    return result
}

export const GetBlogs = async(page) =>{
    const result = await Api.get(`/api/blogs?page=${page}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Blogs result ",result)
    return result
}

export const PostComment = async(body) =>{
    const result = await Api.post(`/api/blog-comments/${body.blog_uuid}`,body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Comment post Result ",result)
    return result 
}


export const GetComments = async(uuid) =>{
    const result = await Api.get(`/api/blog-comments/${uuid}`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Comment get Result ",result)
    return result 
}


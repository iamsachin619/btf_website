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

export const BookAppointment = async(body) =>{
    const result = await Api.post('/api/appointments',body).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Contact Result ",result)
    return result 
}

export const GetPortfolio = async() =>{
    const result = await Api.get(`/api/portfolios`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Portfolio result ",result)
    return result
}

export const GetTags = async() =>{
    const result = await Api.get(`/api/tags`).then(response=>{
        return response
    }).catch((e)=>{
        return e.response
    })
    console.log("Tags result ",result)
    return result
}

export const GetTagsData = async(array) =>{
    let tagNames = []
    await array.map(async (tagId,i) => {
        const temp =  await Api.get(`/api/tags/${tagId}`).then(response=>{
            return response
        }).catch((e)=>{
            return e.response
        })
        tagNames.push(temp.data.name)
        console.log({temp})
        
    })
    console.log('Getting tag', tagNames)
    return tagNames
    // const result = await Api.get(`/api/tags`).then(response=>{
    //     return response
    // }).catch((e)=>{
    //     return e.response
    // })
    // console.log("Tags result ",result)
    // return result
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


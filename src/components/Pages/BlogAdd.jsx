import Markdown from 'markdown-to-jsx'
import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';


const BlogAdd = () => {
  const [blogText, setBlogText] = useState('')
  const [blogTitle, setTitle] = useState('')
  const [file, setFile] = useState()
  const [tags, setTags] = React.useState([])
  const [author, setAuthor] = useState(1)
  const [blogHQ, setHQ] = useState('')
  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };
  const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const addBlogToServer = ()=> {
        const data = new FormData()
        data.append('author',author)
        data.append('img1',file)
        data.append('content', blogText)
        data.append('title', blogTitle)
        data.append('highlight_quote', blogHQ)
        //adding tags
        tags.map((tag)=>{
          data.append('tags', tag.text)
        })
        
        fetch(process.env.REACT_APP_API_URL + '/api/blogs',  { method: "POST", body: data })
          .then(res => res.json())
          .then((res)=> console.log(res))
          .catch(err => console.log(err))
    }
  console.log(process.env.REACT_APP_API_URL)
  return (
    <div style={{marginTop:'200px',textAlign:'left', marginRight:'40px', marginLeft:'40px'}} >
        <button onClick={addBlogToServer}>Submit Blog</button>
        <br/>
        <label>Add blog Title : </label>
        <br/>
        <input style={{width:'100%', height:'40px'}} value={blogTitle} onChange={e => setTitle(e.target.value)}/>
        <br/>
        <label>Add Highlight Quote : </label>
        <br/>
        <input style={{width:'100%', height:'40px'}} value={blogHQ} onChange={e => setHQ(e.target.value)}/>
        <br/>
        <br/>
        <label>Add blog Display Image : </label>
        <br/>
        <input type='file' style={{width:'100%', height:'40px'}} onChange={e => setFile(e.target.files[0])}/>
        <label>Add blog Tags: </label>
        <br/>
        <ReactTags
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
         
          inputFieldPosition="bottom"
         
        />
        <br/>
        <label>Add blog content in MD :</label>
        <textarea style={{width:'100%', maxWidth:'100%', minWidth:'100%'}} value={blogText} onChange={(e)=>{setBlogText(e.target.value)}}></textarea>
        <Markdown>{blogText}</Markdown>
    </div>
  )
}

export default BlogAdd
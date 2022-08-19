import Markdown from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input';


import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GetTags } from '../../api';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



const BlogAdd = () => {
  const theme = useTheme();

  const [blogText, setBlogText] = useState('')
  const [blogTitle, setTitle] = useState('')
  const [file, setFile] = useState()

  const [allTags, setAllTags] = useState( [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ])
  const [tags, setTags] = React.useState([])
  const [author, setAuthor] = useState(1)
  const [blogHQ, setHQ] = useState('')


  //getting all tags
  useEffect( async () => {
    let res = await GetTags()
    setAllTags(res.data)

  },[]) 

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

  
  const handleChangeTagSelect = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value, 'xx')
    setTags(
      // On autofill we get a stringified value.
      value
    );
  };

    const addBlogToServer = ()=> {
        const data = new FormData()
        data.append('author',author)
        data.append('img1',file)
        data.append('content', blogText)
        data.append('title', blogTitle)
        data.append('highlight_quote', blogHQ)
        // adding tags
        tags.map((tag)=>{
          data.append('tags', tag)
        })
        // data.append('tags', tags)
        
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
        {/* <ReactTags
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
         
          inputFieldPosition="bottom"
         
        /> */}

         <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Tags</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={tags}
                onChange={handleChangeTagSelect}
                input={<OutlinedInput label="Tags" />}
                MenuProps={MenuProps}
              >
                {allTags.map((tagFromAllTags) => (
                  <MenuItem
                    key={tagFromAllTags.uuid}
                    value={tagFromAllTags.uuid}
                    style={getStyles(tagFromAllTags, tags, theme)}
                  >
                    {tagFromAllTags.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
        <br/>
        <label>Add blog content in MD :</label>
        <textarea style={{width:'100%', maxWidth:'100%', minWidth:'100%'}} value={blogText} onChange={(e)=>{setBlogText(e.target.value)}}></textarea>
        <Markdown>{blogText}</Markdown>
    </div>
  )
}

export default BlogAdd
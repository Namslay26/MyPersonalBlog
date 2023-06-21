import fs from 'fs';
import { PostMetaData } from './PostMetaData';
import graymatter from 'gray-matter';

function getPostData():PostMetaData[]{
    const folder = 'post/';
    const files = fs.readdirSync(folder);
    const mdposts = files.filter((file)=>file.endsWith('.md'))
    const posts = mdposts.map((filename)=>{
      const filecontents = fs.readFileSync(`post/${filename}`,"utf-8")
      const matterresult = graymatter(filecontents);
      return{
        title: matterresult.data.title,
        date: matterresult.data.date,
        subtitle: matterresult.data.subtitle,
        tag:matterresult.data.tag,
        nameofpost: filename.replace(".md",""),
      }
    })
    return posts;
  }

export default getPostData
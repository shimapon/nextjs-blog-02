import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// 読みたいデータのpathを格納
const postsDirectory = path.join(process.cwd(), 'posts')
type PostData = {[key:string]:string}


export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData: PostData[] = fileNames.map((fileName)=>
    {
        const id = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

            // Combine the data with the id
    return {
        id,
        ...matterResult.data,
      };
    }
    )

      // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

}
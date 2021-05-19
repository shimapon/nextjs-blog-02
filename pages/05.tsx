// APIから画像を表示

import React from 'react'

type Data = {
    message: string;
    status: string;
}


const HelloFetchImage: React.FC = ( )=>{
    const [ImageUrl, setImageUrl] = React.useState('')

    const fetchData = async () => {
        try {
            const url = 'https://dog.ceo/api/breeds/image/random';
            const res = await fetch(url)
            const data: Data = await res.json()
            setImageUrl(data.message)
        } catch(error){
            console.log(error);
        }
    }

    // 副作用フック（マウント時）
    React.useEffect(()=>{
        fetchData()
    },[])




    return (
        <div>
            {ImageUrl && <img src={ImageUrl}/>}
            <div>
                <button onClick={fetchData}>fetch</button>
                <button onClick={()=>setImageUrl('')}>clear</button>
            </div>
        </div>
    )
}

export default function Index() {
    return (
      <div>
        <HelloFetchImage />
      </div>
    );
}
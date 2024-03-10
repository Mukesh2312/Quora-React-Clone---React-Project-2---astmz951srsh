import React from 'react'
import axios from 'axios';
import { useUser } from './UserProvider';

function Downvote(props) {
    const { getUser } = useUser()

    //⬇️⬇️⬇️disliking the post⬇️⬇️⬇️

    const downvote = async (id) => {
        // console.log(id)
        await axios.delete(`https://academics.newtonschool.co/api/v1/quora/like/${id}`, {
            headers: {
                'Authorization': `Bearer ${getUser?.token}`

            }
        }).then((Response) => {
            console.log(Response)

        }).catch((err) => {
            console.log(err)
        })
    }

    const { id } = props
    return (
        <div id='downvote' className='downvoteBtn' onClick={() => downvote(id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 20 9-11h-6V4H9v5H3z" className="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
        </div>
    )
}

export default Downvote

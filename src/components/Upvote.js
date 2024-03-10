import React from 'react'
import axios from 'axios';
import { useUser } from './UserProvider';

function Upvote(props) {
    const { getUser } = useUser()

    const upvote = async (id) => {
        // console.log(id)
        await axios.post(`https://academics.newtonschool.co/api/v1/quora/like/${id}`, null, {
            headers: {
                'Authorization': `Bearer ${getUser?.token}`,

            }
        }).then((Response) => {
            console.log(Response)
        }).catch((err) => {
            console.log(err)
        })

    }

    const { id } = props
    return (
        <div id='upvote' className='upvoteBtn' onClick={() => upvote(id)}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 3 15h6v5h6v-5h6z" className="icon_svg-stroke icon_svg-fill" strokeWidth="1.5" stroke="#666" fill="none" strokeLinejoin="round"></path></svg>

        </div>
    )
}

export default Upvote

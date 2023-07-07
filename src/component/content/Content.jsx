import React from 'react'
import './Content.css'
import{img1,img2,img3,img4,img5,img6,img7,img8,img9,img10} from '../index'
    


function Content() {

  const text =[{img:img1, txt :{arb:'ملخص تقييم الأضرار',eng:''}},{img:img2, txt :{arb:'الابلاغ عن حادث',eng:''}},{img:img3, txt :{arb:'بلاغ عن احتيال',eng:''}},{img:img4, txt :{arb:'احقيه خصم تأميين السيارة',eng:''}},
  {img:img5, txt :{arb:'صيانة السيارة',eng:''}},{img:img6, txt :{arb:'احقيه خصم تأميين السيارة',eng:''}},{img:img7, txt :{arb:'ملخص تقييم الأضرار',eng:''}},{img:img8, txt :{arb:'صيانة السيارة',eng:''}},{img:img9, txt :{arb:'الابلاغ عن حادث',eng:''}},
  {img:img10, txt :{arb:'بلاغ عن احتيال',eng:''}} ]

  return (
    <div className='najm__header-content '>
        {text.map(( card )=>{
          return(
          <div className= 'najm__header-content-card greenHover ' >
              <img src={card.img} alt=" crdImg" />
              <p>{card.txt.arb}</p>

          </div>
          )

        })
          }
    </div>
  )
}

export default Content
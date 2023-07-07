import React from 'react'
import './CHeader.css'

function CHeader() {
  return (
    <div className='najm__cHeader'>
        <div className='najm__cHeader-total'>
            <div>
                <p>الشكاوى المرفوضة</p>
                <p>44</p>
            </div>
            <div>
                <p>الشكاوى المرفوضة</p>
                <p>44</p>
            </div>
            <div>
                <p>شكاوى تم اعتمادها</p>
                <p>150</p>
            </div>
            <div>
                <p>شكاوى جديدة</p>
                <p>150</p>
            </div>
           
        </div>
        <div className='najm__cHeader-select'>
           
            <div>
                <h3>الشكاوي الجديدة</h3>
            </div>
            <div>
                <span>التاريخ</span>
                <select>
                    <option>الكل</option>
                </select>
            </div>
            <div>
                <span>التصنيف</span>
                <select>
                    <option>الكل</option>
                </select>
            </div>
            <div>
                <span>الحالة</span>
                <select>
                    <option>الكل</option>
                </select>
            </div>

        </div>
    </div>
  )
}

export default CHeader
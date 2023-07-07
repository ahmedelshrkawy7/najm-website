import React from 'react'
import './Table.css'
import eye from '../../assets/Group 22.png'

function Table() {
  return (
    <div className='najm__table' >
        <table>
            <thead>
                <tr>
                    <th>عرض</th>
                    <th>الحالة</th>
                    <th>الادارة</th>
                    <th>المدينة</th>
                    <th>تاريخ الشكوى</th>
                    <th>نوع الشكوى</th>
                    <th>رقم الشكوى</th>
                </tr>
            </thead>
           <tbody>
            <tr className='greenHover'>
                    <td><img src={eye} alt="eye" /></td>
                    <td>تم قبولها</td>
                    <td>اداره الشكاوي</td>
                    <td>الرياض</td>
                    <td>2023,مايو,4</td>
                    <td>شكوى 1</td>
                    <td>1</td>
                </tr>
                <tr className='greenHover'>
                    <td><img src={eye} alt="eye" /></td>
                    <td>تم قبولها</td>
                    <td>اداره الشكاوي</td>
                    <td>الرياض</td>
                    <td>2023,مايو,4</td>
                    <td>شكوى 1</td>
                    <td>2</td>
                </tr>
                <tr className='greenHover'>
                    <td><img src={eye} alt="eye" /></td>
                    <td>تم قبولها</td>
                    <td>اداره الشكاوي</td>
                    <td>الرياض</td>
                    <td>2023,مايو,4</td>
                    <td>شكوى 1</td>
                    <td>3</td>
                </tr>
                <tr className='greenHover'>
                    <td><img src={eye} alt="eye" /></td>
                    <td>تم قبولها</td>
                    <td>اداره الشكاوي</td>
                    <td>الرياض</td>
                    <td>2023,مايو,4</td>
                    <td>شكوى 1</td>
                    <td>4</td>
                </tr>
                <tr className='greenHover'>
                    <td><img src={eye} alt="eye" /></td>
                    <td>تم قبولها</td>
                    <td>اداره الشكاوي</td>
                    <td>الرياض</td>
                    <td>2023,مايو,4</td>
                    <td>شكوى 1</td>
                    <td>5</td>
                </tr>
            
           </tbody>
           
        </table>

    </div>
  )
}

export default Table
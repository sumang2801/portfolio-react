import React from 'react'
import './Work.css'
import mywork_data from '../../assets/mywork_data'
import git from '../../assets/git.svg'
import demo from '../../assets/demo.svg'
const Work = () => {
  return (
    <div id='project' className='work'>
      <div className='work-title'>
        <h1>My Project</h1>
         {/* 
        <img src={theme_pattern} alt='' />
       * */}
      </div>
      <div className='work-container'>
        {mywork_data.map((Work, index) => {

          return <dev className='butom'>

            <img src={Work.w_img} key={index} />
            <h1><div>
              <a href={Work.url}><img src={git} /></a>
              <a href={Work.url2}><img src={demo} /></a>



            </div></h1>

          </dev>
        })}



      </div>
    </div>

  )
}

export default Work
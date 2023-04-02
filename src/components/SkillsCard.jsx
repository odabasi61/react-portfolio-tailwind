import React from 'react'

const SkillsCard = (data) => {
    const { img, name } = data;
    return (
    <div>
      <img className='w-20 h-20 mx-auto' src={img} alt={name} />
          <p className='my-4'>{name}</p>
    </div>
  )
}

export default SkillsCard

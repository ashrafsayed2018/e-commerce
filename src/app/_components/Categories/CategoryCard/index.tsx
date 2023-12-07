'use client'
import React from 'react'
import Link from 'next/link'

import { Category } from '../../../../payload/payload-types'

import classes from './index.module.scss'
import { useFilters } from '../../../_providers/Filter'

type CategoryCardProps = {
  category: Category
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const media = category.media as Media

  const {setCategoryFilter} = useFilters()


  return (
    <Link
      href="/products"
      className={classes.card}
      style={{ backgroundImage: `url('${media.url}')` }}
      onClick={() => setCategoryFilter([category.id])}
    >
      <p className={classes.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
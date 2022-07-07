import { cityRouter } from './city'
import { countryRouter } from './country'
import { plotRouter } from './plot'

const asyncRoutes = [
  cityRouter,
  countryRouter,
  plotRouter
]

export default asyncRoutes

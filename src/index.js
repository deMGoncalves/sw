import * as f from 'f'
import agent from 'agent'
import env from 'env'
import register from './register'

f.and(
  agent.isUser,
  env.isProd,
  f.has('serviceWorker', navigator)
) && register()

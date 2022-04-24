/*
 * @Description: 服务入口
 * @Autor: HuiSir<273250950@qq.com>
 * @Date: 2022-04-22 10:30:44
 * @LastEditTime: 2022-04-24 17:44:51
 */
import Seneca from 'seneca'
import register from './controller/register.js'
import useConfig from './hooks/useConfig.js'

// 读取配置
const { server } = useConfig()

Seneca()
    .use(register)
    .listen(server)
export type Device = {
    id: number
    title: string
    // 使用联合类型替代单纯的 string，限制只能是特定状态
    status: 'Online' | 'Offline' | 'Error' 
    alarm: boolean
    type: 'Machine' | 'Sensor' | 'Gateway'
}
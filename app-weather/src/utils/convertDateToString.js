
export function dateFormat(dt) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = 
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
    'Jun', 'Ju', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date(dt);
    const dayOfWeek = days[date.getUTCDay()]
    const month = months[date.getUTCMonth()] 
    const day = date.getUTCDate()
    return `${dayOfWeek}, ${day} ${month}`
    
}

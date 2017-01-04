import React from 'react'
import Link from 'next/link'
export default () => (
  <div>
    <div>Click <Link href="/signup"><a>here</a></Link> to sign up</div>
    <div>Click <Link href="/admin/"><a>here</a></Link> to go to Admin</div>
  </div>
)

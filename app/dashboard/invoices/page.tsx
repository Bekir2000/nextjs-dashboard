import React from 'react'

async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
      <p>Invoices Page</p>
    </div>
  )
}

export default Page

import React from 'react'
import {Link} from 'react-router-dom'
function ErrorPage() {
  return (
    <div>
      <h1>
        <Link to=''>Essa página não existe, voltar agora</Link>
      </h1>
    </div>
  )
}

export default ErrorPage
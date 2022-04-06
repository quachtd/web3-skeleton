import Head from 'next/head'

export default function Layout({ children }) {
	return (
	<div className="flex flex-col h-screen justify-between text-gray-400 bg-gray-900 body-font">
  		<header className="h-fit">
		  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
		      <img src="Q_icon.png" strokeLinecap="round" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24"/>
		      <span className="ml-3 text-2xl">Quachtd</span>
		    </a>
		    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
		      <a className="mr-5 hover:text-white">First Link</a>
		      <a className="mr-5 hover:text-white">Second Link</a>
		      <a className="mr-5 hover:text-white">Third Link</a>
		      <a className="mr-5 hover:text-white">Fourth Link</a>
		    </nav>
			<button type="submit" className="inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded bg-gray-700 hover:bg-gray-600 text-white transition-colors">
			  <svg fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" className="h-6 w-6" viewBox="0 0 24 24">
			    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
			  </svg>
			  <div>Connect Wallet</div>
			  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
			  </svg>
			</button>		    
		  </div>
  		</header>
  		<main className="mb-auto h-10">
  			<div className="container px-5 py-24 mx-auto place-items-center">
  			{children}
  			</div>
  		</main>
  		<footer className="h-fit">
		  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
		    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
		      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
		        <img src="Q_icon.png" className="w-7 h-7 text-white p-1 bg-red-500 rounded-full"/>
		        <span className="ml-3 text-lg">Quachtd</span>
		      </a>
		      <p className="mt-2 text-sm text-gray-500">Web3-skeleton</p>
		    </div>
		    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
		      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
		        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">CATEGORIES</h2>
		        <nav className="list-none mb-10">
		          <li>
		            <a className="text-gray-400 hover:text-white">First Link</a>
		          </li>
		          <li>
		            <a className="text-gray-400 hover:text-white">Second Link</a>
		          </li>
		          <li>
		            <a className="text-gray-400 hover:text-white">Third Link</a>
		          </li>
		          <li>
		            <a className="text-gray-400 hover:text-white">Fourth Link</a>
		          </li>
		        </nav>
		      </div>
		      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
		        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">CATEGORIES</h2>
		        <nav className="list-none mb-10">
		          <li>
		            <a className="text-gray-400 hover:text-white">First Link</a>
		          </li>
		          <li>
		            <a className="text-gray-400 hover:text-white">Second Link</a>
		          </li>
		          <li>
		            <a className="text-gray-400 hover:text-white">Third Link</a>
		          </li>
		          <li>
		            <a className="text-gray-400 hover:text-white">Fourth Link</a>
		          </li>
		        </nav>
		      </div>
		    </div>
		  </div>
		  <div className="bg-gray-800 bg-opacity-100">
		    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
		      <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 Quachtd</p>
		      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
		        <a className="text-gray-400">
		          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
		            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
		          </svg>
		        </a>
		        <a className="ml-3 text-gray-400" href="https://twitter.com/quachtd" target="_blank">
		          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
		            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
		          </svg>
		        </a>
		        <a className="ml-3 text-gray-400">
		          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
		            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
		            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
		          </svg>
		        </a>
		        <a className="ml-3 text-gray-400" href="https://twitter.com/quachtd" target="_blank">
		          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
		            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
		            <circle cx="4" cy="4" r="2" stroke="none"></circle>
		          </svg>
		        </a>
		      </span>
		    </div>
		  </div>
  		</footer>
	</div>
	)
}
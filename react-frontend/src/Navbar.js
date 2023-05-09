import React from 'react'

export default function Navbar({ handleFilter }) {
  return (

    <>

      <ul
        class="relative m-0 list-none px-[0.2rem] pb-12"
        data-te-sidenav-menu-ref>
        <li class="relative pt-10">
          <a
            class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-3.5 w-3.5">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
            <span className=' text-xl' onClick={() => handleFilter("All Articles")}>Articles</span>
          </a>

          <a
            class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">

            </span>
            {/* <span className=' text-xl'>Create New Article</span> */}
          </a>

        </li>
        <li class="relative pt-4">
          <span
            class="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400"
          >Show Articles</span>
          <br />
          <br />
          <a
            class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">

            </span>
            <span className=' text-lg' onClick={() => handleFilter("All Articles")}>All Articles</span>

          </a>

          <a
            class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">

            </span>
            <span className=' text-lg' onClick={() => handleFilter("Published Articles")}>Published Articles</span>

          </a>

          <a
            class="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
            data-te-sidenav-link-ref>
            <span
              class="mr-4 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">

            </span>
            <span className=' text-lg' onClick={() => handleFilter("UnPublished Articles")}>Unpublished Articles</span>

          </a>
        </li>

      </ul>



    </>
  )
}

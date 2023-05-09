import React from "react";

export default function Article(props) {
  
  return (
  <>
    <br/>
      <div class="flex mx-auto max-w-md">
        <span
         
          className="relative block overflow-hidden rounded-lg border border-gray-100 black-border p-4 sm:p-6 lg:p-8 bg-slate-50"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              
              <a href="#" className="hover:text-blue-500">{props.title}</a>

              </h3>
            </div>
          </div>

          <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-500">
             {props.body}
            </p>
          </div>

          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600 mt-3">
              
              {props.published?  
              (<span  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">Published</span>) 
              : 
              (<span  className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">Not Published</span>) }
              
              
              </dt>
              <dd className="text-xs text-gray-500 pl-1">{new Date(props.created_at).toLocaleString()}</dd>
            </div>
          </dl>
        </span>
      </div>

    </>
  );
}

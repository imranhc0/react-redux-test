"use client";

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "@/state/companySlice";

export function Paginations({ company, status }) {
  const dispatch = useDispatch();
  console.log(company, status)
  const handleClilck = (url: string) => {
    const queryString = '?' + url.split('?')[1];
    dispatch(fetchCompany(queryString) as any);
  }
  return (
    <div>
      <nav aria-label="Page navigation example" className=''>
        <ul className="inline-flex -space-x-px text-sm">
          {
            status === "idle" ? company?.company_list?.links?.map((links, index: number) => (

              <li key={index} className="bg-lime-300 cursor-pointer" onClick={(e) => {
                e.preventDefault();
                handleClilck(links.url)
              }} >
                <a className={`${links.active ? "bg-primary" : ""} flex items-center justify-center px-3 h-8 border border-gray-300 hover:bg-gray-100 hover:text-gray-700`} dangerouslySetInnerHTML={{ __html: links.label }} />
              </li>
            )) : "loading..."

          }
        </ul>
      </nav>
    </div>
  )
}


export default Paginations
// Note: Table component
"use client";

import { useEffect, useState } from "react";
import { Table } from "@radix-ui/themes"
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "@/state/companySlice";
import Paginations from "./Pagination";
import { Button } from "@/components/ui/button"




export function Tables({ company, status }) {

  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Company Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Company Phone</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Address1</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>City</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
          status === "idle" ? company?.company_list?.data?.map((company) => (
            <Table.Row key={company.id}>
              <Table.RowHeaderCell>{company.company_name}</Table.RowHeaderCell>
              <Table.Cell>{company.company_phone}</Table.Cell>
              <Table.Cell>{company.address1}</Table.Cell>
              <Table.Cell>{company.city}</Table.Cell>
              <Table.Cell>{company.company_status == 1 ? "In-Progress" : "Inactive"}</Table.Cell>
            </Table.Row>
          )) : "loading..."
        }

      </Table.Body>
    </Table.Root>
  )
}

export default function TableComponent() {
  const dispatch = useDispatch();
  //@ts-ignore
  const company = useSelector((state) => state.company.company);
  //@ts-ignore
  const status = useSelector((state) => state.company.status);
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    //@ts-ignore
    dispatch(fetchCompany(`?company_status=1&company_name=${selectedValue}`));
  };

  console.log(selectedValue);

  useEffect(() => {
    if (!company.status_code) {
      dispatch(fetchCompany("") as any);
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col items-end mt-8">
      <div className="mb-8">
        <div>
          <select name="company" id="company_name" value={selectedValue} onChange={handleSelectChange}>
            <option value="">All Company</option>
            {
              company?.company_list?.data?.map((company) => (
                //@ts-ignore
                <option value={company.company_name} key={company.name}>{company.company_name}</option>
              ))
            }
          </select>
          <Button variant={"secondary"} onClick={handleClick}>Filter</Button>

        </div>
        <Tables company={company} status={status} />
      </div>
      <div className="mt-4">
        <Paginations company={company} status={status} />
      </div>
    </div>
  )

}
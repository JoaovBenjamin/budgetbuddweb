'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";

export default function DropdownAction() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem startContent={<Pencil size={18} />} key="edit">editar</DropdownItem>
        <DropdownItem startContent={<Trash size={18} />} key="delete" className="text-danger" color="danger">
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

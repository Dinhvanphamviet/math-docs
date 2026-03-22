"use client";

import Link from "next/link";
import { BookOpen, Sigma, Calculator, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const categories = [
  {
    id: "toan-10",
    name: "Toán 10",
    icon: BookOpen,
    children: [
      { name: "Mệnh đề & Tập hợp", slug: "menh-de-tap-hop" },
      { name: "Hàm số bậc hai", slug: "ham-so-bac-hai" },
      { name: "Hệ thức lượng", slug: "he-thuc-luong" },
      { name: "Vectơ", slug: "vecto" },
    ],
  },
  {
    id: "toan-11",
    name: "Toán 11",
    icon: Sigma,
    children: [
      { name: "Lượng giác", slug: "luong-giac" },
      { name: "Dãy số & Cấp số", slug: "day-so" },
      { name: "Quan hệ song song", slug: "quan-he-song-song" },
    ],
  },
  {
    id: "toan-12",
    name: "Toán 12",
    icon: Calculator,
    children: [
      { name: "Giải tích 12", slug: "giai-tich-12" },
      { name: "Hình học không gian", slug: "hinh-hoc-12" },
      { name: "Ôn thi THPT Quốc Gia", slug: "on-thi-thpt" },
    ],
  },
];

export default function SidebarClient() {
  return (
    <Sidebar className="top-[73px] h-[calc(100svh-73px)] border-border/40 bg-surface-low">
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[13px] uppercase tracking-wider text-secondary font-bold mb-2">
            Danh mục
          </SidebarGroupLabel>
          <SidebarMenu>
            {categories.map((cat) => (
              <Collapsible
                key={cat.id}
                asChild
                defaultOpen={cat.id === "toan-10"}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton 
                      tooltip={cat.name} 
                      className="py-5 font-medium text-primary/80 hover:text-secondary hover:bg-surface-high/50 data-[state=open]:text-secondary data-[state=open]:font-bold transition-all"
                    >
                      <cat.icon className="w-5 h-5" />
                      <span className="text-[13px] uppercase tracking-wider">{cat.name}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <SidebarMenuSub className="border-border/50">
                      {cat.children.map((child) => (
                        <SidebarMenuSubItem key={child.slug}>
                          <SidebarMenuSubButton asChild className="hover:text-secondary text-primary/70 transition-colors">
                            <Link href={`/danh-muc/${child.slug}`}>
                              <span>{child.name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
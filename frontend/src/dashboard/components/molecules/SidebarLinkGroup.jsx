import React from 'react';
import { LayoutDashboard, Users, Calendar, BarChart3, Settings } from 'lucide-react';
import IconLink from '../atoms/IconLink';

const SidebarLinkGroup = () => (
  <div className="space-y-1 py-2">
    <IconLink href="#" icon={LayoutDashboard} active>
      Dashboard
    </IconLink>
    <IconLink href="#" icon={Users}>
      Registro
    </IconLink>
    <IconLink href="#" icon={Calendar}>
      Calendar
    </IconLink>
    <IconLink href="#" icon={BarChart3}>
      Reports
    </IconLink>
    <IconLink href="#" icon={Settings}>
      Administración
    </IconLink>
  </div>
);

export default SidebarLinkGroup;

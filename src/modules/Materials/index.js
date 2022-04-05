import React from 'react';
import CollapsibleTable from '../../components/Datatable';
import Sidebar from './components/Sidebar';

const Materials = () => (
    <div className='Materials-content'>
        <Sidebar />
        <CollapsibleTable />
    </div>
);

export default {
    routeProps: {
        path: '/materials',
        component: Materials
    },
    name: 'Materials',
}
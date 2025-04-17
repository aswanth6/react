import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeContent, setActiveContent] = useState('');
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedItems, setExpandedItems] = useState({});

  // Initialize from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('activeContent');
    if (savedContent) {
      setActiveContent(savedContent);
      showContent(savedContent);
    }
  }, []);

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const toggleItem = (itemPath) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemPath]: !prev[itemPath]
    }));
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const showContent = (id) => {
    setActiveContent(id);
    localStorage.setItem('activeContent', id);
  };

  const handleHeaderClick = (headerText) => {
    const sectionName = headerText.trim().toLowerCase();
    toggleSection(sectionName);
    
    const label = headerText.trim().toLowerCase().replace(/ /g, '-').replace(/[^a-z\-]/g, '');
    showContent(`${label}-content`);
  };

  const handleItemClick = (e, itemPath, hasSubItems) => {
    if (hasSubItems) {
      e.stopPropagation();
      toggleItem(itemPath);
    }
  };

  // Complete menu data structure
  const menuItems = [
  {
    title: "Overview",
    icon: "fa-tachometer-alt",
    items: []
  },
  {
    title: "Resources",
    icon: "fa-server",
    items: [
      {
        title: "Compute Management",
        icon: "fa-microchip",
        items: [
          { title: "x86", icon: "fa-server" },
          { title: "AIX", icon: "fa-server" },
          { title: "Solaris", icon: "fa-server" },
          { title: "MAC", icon: "fa-laptop" }
        ]
      },
      {
        title: "Storage Management",
        icon: "fa-database",
        items: [
          { title: "Block Storage", icon: "fa-hdd" },
          { title: "Object Storage", icon: "fa-database" },
          { title: "S3 buckets", icon: "fa-box" },
          { title: "NAS Storage", icon: "fa-folder" }
        ]
      },
      {
        title: "Network Management",
        icon: "fa-network-wired",
        items: [
          { title: "Security Groups", icon: "fa-shield-alt" },
          { title: "VLANs", icon: "fa-project-diagram" },
          { title: "LBs", icon: "fa-random" },
          { title: "Firewalls", icon: "fa-fire" }
        ]
      },
      {
        title: "Platform as a Services",
        icon: "fa-cubes",
        items: [
          { title: "Kubernetes", icon: "fa-network-wired" },
          { title: "DBaaS", icon: "fa-database" }
        ]
      },
      {
        title: "NextGen Computing",
        icon: "fa-rocket",
        items: [
          { title: "Serverless", icon: "fa-bolt" },
          { title: "Edge Computing", icon: "fa-edge" },
          { title: "IoT", icon: "fa-microchip" }
        ]
      }
    ]
  },
  {
    title: "Automation Center",
    icon: "fa-robot",
    items: [
      { title: "Task Scheduler", icon: "fa-calendar-alt" },
      { title: "Ansible", icon: "fa-cogs" },
      { title: "Terraform", icon: "fa-code-branch" }
    ]
  },
  {
    title: "AI/ML Hub",
    icon: "fa-brain",
    items: [
      { title: "Models", icon: "fa-cube" },
      { title: "Training", icon: "fa-brain" },
      { title: "Inference", icon: "fa-play-circle" },
      { title: "Pipelines", icon: "fa-project-diagram" },
      { title: "Data Management", icon: "fa-database" }
    ]
  },
  {
    title: "Observability",
    icon: "fa-eye",
    items: [
      { title: "Logs", icon: "fa-file-alt" },
      { title: "Alerts", icon: "fa-bell" },
      { title: "Anomaly Detection", icon: "fa-eye" },
      { title: "Metrics", icon: "fa-chart-line" },
      { title: "Tracing", icon: "fa-route" },
      { title: "Audit Logs", icon: "fa-clipboard-list" },
      { title: "Performance Monitoring", icon: "fa-tachometer-alt" },
      { title: "Capacity Planning", icon: "fa-layer-group" }
    ]
  },
  {
    title: "Marketplace",
    icon: "fa-store",
    items: [
      { title: "Apps", icon: "fa-th-large" },
      { title: "Services", icon: "fa-cogs" },
      { title: "Templates", icon: "fa-clone" }
    ]
  },
  {
    title: "Compliance Center",
    icon: "fa-shield-alt",
    items: [
      { title: "Compliance Reports", icon: "fa-file-contract" },
      { title: "Audit Reports", icon: "fa-clipboard-check" },
      { title: "Policy Management", icon: "fa-university" },
      { title: "Risk Assessment", icon: "fa-exclamation-triangle" }
    ]
  },
  {
    title: "IAM",
    icon: "fa-users-cog",
    items: [
      { title: "User Management", icon: "fa-user" },
      { title: "RBAC", icon: "fa-user-shield" },
      { title: "Single Sign-On", icon: "fa-sign-in-alt" },
      { title: "Multi-Factor Setup", icon: "fa-key" },
      { title: "Identity Federation", icon: "fa-users" },
      { title: "API Key Management", icon: "fa-code" }
    ]
  },
  {
    title: "Backup & DR",
    icon: "fa-sync-alt",
    items: [
      { title: "Backup", icon: "fa-save" },
      { title: "Restore", icon: "fa-undo-alt" },
      { title: "Replication", icon: "fa-clone" },
      { title: "Disaster Recovery", icon: "fa-exchange-alt" }
    ]
  },
  {
    title: "Config Management",
    icon: "fa-sliders-h",
    items: [
      { title: "CMDB", icon: "fa-database" },
      { title: "Version Control", icon: "fa-code-branch" },
      { title: "Configuration Drift", icon: "fa-search" }
    ]
  },
  {
    title: "Support Center",
    icon: "fa-life-ring",
    items: [
      { title: "Knowledge Base", icon: "fa-book" },
      { title: "Ticketing System", icon: "fa-ticket-alt" },
      { title: "Chatbot", icon: "fa-robot" }
    ]
  },
  {
    title: "Notifications",
    icon: "fa-bell",
    items: [
      { title: "Alerts", icon: "fa-bell" },
      { title: "Incidents", icon: "fa-bug" },
      { title: "Events", icon: "fa-bullhorn" }
    ]
  },
  {
    title: "Cost Management",
    icon: "fa-wallet",
    items: [
      { title: "Cost Analysis", icon: "fa-chart-pie" },
      { title: "Budgeting", icon: "fa-wallet" },
      { title: "Cost Optimization", icon: "fa-sliders-h" },
      { title: "Cost Allocation", icon: "fa-divide" }
    ]
  },
  {
    title: "Integrations",
    icon: "fa-plug",
    items: [
      { title: "API Integrations", icon: "fa-plug" },
      { title: "Third-Party Integrations", icon: "fa-puzzle-piece" },
      { title: "Webhooks", icon: "fa-code" }
    ]
  }
];
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="logo">
        <img src="./images/tcs_logo.png" alt="TCS Logo" className="expanded-logo" />
        <img 
          src="./images/tcs_logo_small.png" 
          alt="Collapsed Logo" 
          className="collapsed-logo" 
          style={{ display: collapsed ? 'block' : 'none' }} 
        />
      </div>

      {menuItems.map((section) => (
        <React.Fragment key={section.title}>
          <h2 onClick={() => handleHeaderClick(section.title)}>
            <i className={`fas ${section.icon}`}></i>
            {!collapsed && <span>{section.title}</span>}
            {section.items.length > 0 && !collapsed && (
              <i className={`fas fa-chevron-${
                expandedSections[section.title.toLowerCase()] ? 'up' : 'down'
              }`}></i>
            )}
          </h2>
          
          {section.items.length > 0 && (
            <ul style={{ 
              display: expandedSections[section.title.toLowerCase()] ? 'block' : 'none',
              paddingLeft: collapsed ? '0' : '1rem'
            }}>
              {section.items.map((item) => {
                const itemPath = `${section.title}-${item.title}`;
                const hasSubItems = item.items && item.items.length > 0;
                
                return (
                  <li 
                    key={item.title}
                    className={expandedItems[itemPath] ? 'active' : ''}
                    onClick={(e) => handleItemClick(e, itemPath, hasSubItems)}
                  >
                    <div className="item-content">
                      <i className={`fas ${item.icon}`}></i>
                      {!collapsed && (
                        <>
                          <span>{item.title}</span>
                          {hasSubItems && (
                            <i className={`fas fa-chevron-${
                              expandedItems[itemPath] ? 'up' : 'down'
                            }`}></i>
                          )}
                        </>
                      )}
                    </div>
                    
                    {hasSubItems && (
                      <ul style={{ 
                        display: expandedItems[itemPath] ? 'block' : 'none',
                        paddingLeft: collapsed ? '0' : '1rem'
                      }}>
                        {item.items.map((subItem) => (
                          <li key={subItem.title}>
                            <i className={`fas ${subItem.icon}`}></i>
                            {!collapsed && <span>{subItem.title}</span>}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </React.Fragment>
      ))}

      <div className="collapse-toggle" onClick={toggleSidebar}>
        <i className={`fas ${collapsed ? 'fa-angle-right' : 'fa-angle-left'}`} id="toggle-icon"></i>
      </div>
    </div>
  );
};

export default Sidebar;
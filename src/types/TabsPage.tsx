import { Tabs } from "../components/Tabs/Tabs";

export const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};
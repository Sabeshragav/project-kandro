import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [filter, setFilter] = useState(() => {
    const localFil = localStorage.getItem("localFil");
    return localFil ? JSON.parse(localFil) : 0;
  });

  const handleFilter = (val) => {
    setFilter(val);
    localStorage.setItem("localFil", JSON.stringify(val));
  };

  const [datasets, setDatasets] = useState([
    {
      id: "1",
      name: "Global Health Data",
      owner: "DataCorp",
      time: "2024-11-05T15:46:00.000Z",
      quality: 92,
      rating: 4.9,
      price: 99.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "2",
      name: "COVID-19 Vaccine Efficacy",
      owner: "BioTech Institute",
      time: "2024-11-05T16:00:00.000Z",
      quality: 85,
      rating: 4.6,
      price: 149.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "3",
      name: "Stock Market Predictions",
      owner: "FinanceData",
      time: "2024-11-05T16:10:00.000Z",
      quality: 90,
      rating: 4.3,
      price: 199.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "4",
      name: "Climate Change Effects",
      owner: "EcoData",
      time: "2024-11-05T16:20:00.000Z",
      quality: 80,
      rating: 4.0,
      price: 249.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "5",
      name: "Sports Analytics Dataset",
      owner: "SportSci",
      time: "2024-11-05T16:30:00.000Z",
      quality: 95,
      rating: 4.7,
      price: 799.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "6",
      name: "Financial Crime Trends",
      owner: "SafeData",
      time: "2024-11-05T16:40:00.000Z",
      quality: 88,
      rating: 4.4,
      price: 49.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "7",
      name: "E-commerce Behavior Data",
      owner: "MarketTrends",
      time: "2024-11-05T16:50:00.000Z",
      quality: 90,
      rating: 4.8,
      price: 129.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "8",
      name: "Energy Consumption Data",
      owner: "EnergyTech",
      time: "2024-11-05T17:00:00.000Z",
      quality: 85,
      rating: 4.2,
      price: 399.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "9",
      name: "Public Health Policy Data",
      owner: "HealthStats",
      time: "2024-11-05T17:10:00.000Z",
      quality: 78,
      rating: 4.5,
      price: 499.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
    {
      id: "10",
      name: "Machine Learning Models Dataset",
      owner: "AI Labs",
      time: "2024-11-05T17:20:00.000Z",
      quality: 92,
      rating: 4.9,
      price: 1099.99,
      coverImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1Ck+UAAAAAASUVORK5CYII=",
    },
  ]);

  return (
    <DataContext.Provider value={{ filter, handleFilter, datasets }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
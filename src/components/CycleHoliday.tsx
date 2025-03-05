import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define a proper type for holidays
interface Holiday {
    name: string;
    emoji: string;
    date: string; // Format: MM-DD
}

export function CycleHoliday(): React.JSX.Element {
    const holidays: Holiday[] = [
        { name: "New Year's Day", emoji: "🎉", date: "01-01" },
        { name: "Valentine's Day", emoji: "💌", date: "02-14" },
        { name: "Halloween", emoji: "🎃", date: "10-31" },
        { name: "Christmas", emoji: "🎄", date: "12-25" },
        { name: "Thanksgiving", emoji: "🦃", date: "11-25" }
    ];

    // Explicitly use Holiday[] instead of any[]
    const sortAlphabetically = (holidays: Holiday[]): Holiday[] => {
        return holidays.slice().sort((a, b) => a.name.localeCompare(b.name));
    };

    const sortByYear = (holidays: Holiday[]): Holiday[] => {
        return holidays.slice().sort((a, b) => {
            const [monthA, dayA] = a.date.split("-").map(Number);
            const [monthB, dayB] = b.date.split("-").map(Number);
            return monthA === monthB ? dayA - dayB : monthA - monthB;
        });
    };

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(holidays[0]);

    const advanceByAlphabet = () => {
        const sortedHolidays = sortAlphabetically(holidays);
        const currentIndex = sortedHolidays.findIndex(
            (h) => h.name === currentHoliday.name
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    const advanceByYear = () => {
        const sortedHolidays = sortByYear(holidays);
        const currentIndex = sortedHolidays.findIndex(
            (h) => h.name === currentHoliday.name
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    return (
        <div>
            <h1>Holiday: {currentHoliday.emoji}</h1>
            <Button variant="primary" onClick={advanceByAlphabet}>
                Advance by Alphabet
            </Button>
            <Button variant="secondary" onClick={advanceByYear}>
                Advance by Year
            </Button>
        </div>
    );
}

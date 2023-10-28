import pandas as pd


def calculate_demographic_data(print_data=True):
    # Read data from file
    df = pd.read_csv("adult.data.csv")

    # How many of each race are represented in this dataset? This should be a Pandas series with race names as the index labels.
    race_count = df['race'].value_counts()

    # What is the average age of men?
    average_age_men = round( df.groupby('sex')['age'].mean()['Male'], 1 )

    # What is the percentage of people who have a Bachelor's degree?
    percentage_bachelors = round( df['education'].value_counts(normalize=True)['Bachelors'] * 100.0, 1 )

    # What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
    # What percentage of people without advanced education make more than 50K?


    #round(100* / , 1 )
    # with and without `Bachelors`, `Masters`, or `Doctorate`
    higher_education =  df.loc[df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])]
    lower_education = df.loc[~df['education'].isin(['Bachelors', 'Masters', 'Doctorate'])]

    # percentage with salary >50K
    higher_education_rich = round(100.0 * (higher_education['salary'] == '>50K').sum() / len(higher_education), 1 )
    lower_education_rich = round(100.0 * (lower_education['salary'] == '>50K').sum() / len(lower_education), 1 )


    # What is the minimum number of hours a person works per week (hours-per-week feature)?
    min_work_hours = df['hours-per-week'].min()

    # What percentage of the people who work the minimum number of hours per week have a salary of >50K?
    num_min_workers = df.loc[df['hours-per-week'] == min_work_hours]

    rich_percentage = round(100.0 * (num_min_workers['salary'] == '>50K').sum() / len(num_min_workers) , 1 )

    # What country has the highest percentage of people that earn >50K?
    highest_earning_country = None
    highest_earning_country_percentage = 0.0
    for country, data in df.groupby('native-country'):
        percentage = (data['salary'] == '>50K').sum() / data['salary'].count()
        if highest_earning_country_percentage < percentage:
            highest_earning_country_percentage = percentage
            highest_earning_country = country
    highest_earning_country_percentage = round(100 * highest_earning_country_percentage,1)


    # Identify the most popular occupation for those who earn >50K in India.
    top_IN_occupation = df[(df['salary'] == '>50K') & (df['native-country'] == 'India')]['occupation'].value_counts().keys()[0]

    # DO NOT MODIFY BELOW THIS LINE

    if print_data:
        print("Number of each race:\n", race_count) 
        print("Average age of men:", average_age_men)
        print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
        print(f"Percentage with higher education that earn >50K: {higher_education_rich}%")
        print(f"Percentage without higher education that earn >50K: {lower_education_rich}%")
        print(f"Min work time: {min_work_hours} hours/week")
        print(f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
        print("Country with highest percentage of rich:", highest_earning_country)
        print(f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
        print("Top occupations in India:", top_IN_occupation)

    return {
        'race_count': race_count,
        'average_age_men': average_age_men,
        'percentage_bachelors': percentage_bachelors,
        'higher_education_rich': higher_education_rich,
        'lower_education_rich': lower_education_rich,
        'min_work_hours': min_work_hours,
        'rich_percentage': rich_percentage,
        'highest_earning_country': highest_earning_country,
        'highest_earning_country_percentage':
        highest_earning_country_percentage,
        'top_IN_occupation': top_IN_occupation
    }

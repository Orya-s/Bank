import pymysql
import pandas as pd


def create_database(db_name):
    try:
        initial_connection = pymysql.connect(
            host="localhost",
            user="root",
            password=""
        )
        initial_connection.cursor().execute(f'create database {db_name};')
        initial_connection.commit()
        print(f"{db_name} database created successfully")
    except TypeError as e:
        print(e)
        print("Error creating database")

        
create_database("bank")
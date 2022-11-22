import pymysql

def conn():
    try:
        return pymysql.connect(
            host="localhost",
            user="root",
            password="",
            db="bank",
            charset="utf8",
            cursorclass=pymysql.cursors.DictCursor
        )
    except:
        print("Error connectiong to database")


def get_breakdown():
    query = "SELECT category, SUM(amount) as amount FROM transactions GROUP BY category"
    with conn().cursor() as cursor:
        cursor.execute(query)
        return cursor.fetchall()
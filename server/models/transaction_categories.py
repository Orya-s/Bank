import pymysql



def get_breakdown():
    connection = pymysql.connect(
        host="localhost",
        user="root",
        password="",
        db="bank",
        charset="utf8",
        cursorclass=pymysql.cursors.DictCursor
    )
    query = "SELECT category, SUM(amount) as amount FROM transactions GROUP BY category"
    with connection.cursor() as cursor:
        cursor.execute(query)
        return cursor.fetchall()